function postUser(user, token) {
    const userdata = { 
        token: token,
        name: user.name,
        email: user.email,
        picture: user.picture,
        nickname: user.nickname,
        sub: user.sub,
        updated_at: user.updated_at,
    }

    // if User already exists in auth-database do nothing else add to auth-database
    fetch('https://localhost:8081/api/v1/user', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(userdata),
    })
}
export default postUser;