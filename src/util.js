function logMiddleware(req, _, next) {
    console.log(logMessage(req));
    next();
}

function logMessage(req) {
    // Message structure:
    // [00/00/00 - 00:00:00] METHOD /path
    
    const now = new Date(Date.now());
        
    const day = [
        now.getDay() < 10 ? "0" + now.getDay() : now.getDay(),
        now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1,
        now.getFullYear(),
    ];

    const time = [
        now.getHours() < 10 ? "0" + now.getHours() : now.getHours(),
        now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes(),
        now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds(),
    ];

    return `[${day.join("/")} - ${time.join(":")}] ${req.method} ${req.originalUrl}`;
}

module.exports = {
    logMessage,
    logMiddleware,
};
