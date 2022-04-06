import crypto from 'crypto';

const getHash256 = (a: string) => {
    return crypto.createHash('sha256').update(a).digest('hex');
}

const getHmac512 = (str: string, key: string) => {
    let hmac = crypto.createHmac("sha512", key);
    return hmac.update(Buffer.from(str, 'utf8')).digest("hex");
}