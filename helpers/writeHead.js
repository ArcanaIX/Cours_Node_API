export default function (res, message, contentType, body, statusCode = 200 ) {
    res.writeHead(statusCode, message, {
        'Content-Type': contentType,
        'Content-Length': Buffer.byteLength(body)
    });
}

