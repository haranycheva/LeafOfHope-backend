const verificateMessage = (user, verificationToken) => {
    return {
        title: `Welcome to Leaf Of Hope, ${user.username}!`,
        filling: `Thank you for signing up! Before you can start exploring and 
        exchanging plants, we need to verify your email address. Simply click
        the button below to complete your registration.`,
        buttonText: `Verify My Email`,
        buttonUrl: `https://leafofhope.online/authentication.html?verification=${verificationToken}`,
        warning: `If you didn’t create an account, you can safely ignore this email.`,
        subject: `You're almost there! Confirm your email to start exploring`,
        email: user.email,
        text: "Thank you for signing up!"
    }
}

export default verificateMessage