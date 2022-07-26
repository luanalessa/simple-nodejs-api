const validate = (schema) => async () => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    return next();
  } catch (e) {
    if (e instanceof Error) {
        console.log(e);
        return res.status(400).send(e.message);
    }
  }
};
module.export = validate;