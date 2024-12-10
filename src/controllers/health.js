exports.check = (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Service is running',
        timestamp: new Date().toISOString(),
      });
}