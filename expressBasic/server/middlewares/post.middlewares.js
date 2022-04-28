const postExists = async (req, res) => {
  try {
    const { id } = req.params;

    await Post.findOne({ where: { id } });

    if (!post) {
      return res.status(404).json({
        status: 'error',
        message: 'No posdt found with the given id',
      });
    }

    req.post = post;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postExists };
