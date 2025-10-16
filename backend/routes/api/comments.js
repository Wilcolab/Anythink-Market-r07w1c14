//hey github copilot, help me write an express route for comments
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json(comment);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json(comment);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

// Add a route to get comments by postId
router.get("/post/:postId", async (req, res, next) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (err) {
    next(err);
  }
});

// Add a route to get comments by userId
router.get("/user/:userId", async (req, res, next) => {
  try {
    const comments = await Comment.find({ userId: req.params.userId });
    res.json(comments);
  } catch (err) {
    next(err);
  }
});

// Add a route to get comments by content (search)
router.get("/search/:content", async (req, res, next) => {
  try {
    const comments = await Comment.find({
      content: { $regex: req.params.content, $options: "i" },
    });
    res.json(comments);
  } catch (err) {
    next(err);
  }
});

// Add a route to get comments created after a certain date
router.get("/after/:date", async (req, res, next) => {
  try {
    const date = new Date(req.params.date);
    if (isNaN(date.getTime())) {
      return res.status(400).json({ message: "Invalid date format" });
    }
    const comments = await Comment.find({ createdAt: { $gt: date } });
    res.json(comments);
  } catch (err) {
    next(err);
  }
});

// Add a route to get comments created before a certain date
router.get("/before/:date", async (req, res, next) => {
  try {
    const date = new Date(req.params.date);
    if (isNaN(date.getTime())) {
      return res.status(400).json({ message: "Invalid date format" });
    }
    const comments = await Comment.find({ createdAt: { $lt: date } });
    res.json(comments);
  } catch (err) {
    next(err);
  }
}); 
