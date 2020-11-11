class Token {

    payload (token) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }

    decode (data) {
        return JSON.parse(atob(data))
    }

    isValid (token) {
        const payload = this.payload(token);
        if (payload) {
            return payload.iss === "http://realtimeapp.local/api/auth/login";
        }
        return false;
    }

}

export default Token = new Token();
