const forgotPassword = (user, verificationToken) => {
    return {
        title: `Reset Your Password, ${user.username}!`,
        filling: `No worries! If you forgot your password, you can set a new one by clicking the button below. 
        Let’s get you back to exploring and exchanging plants in no time! Just simply click
        the button below`,
        buttonText: `Reset My Password`,
        buttonUrl: `https://leafofhope.online/resetPassword.html?verification=${verificationToken}`,
        warning: `If you didn’t request a password reset, please ignore this email or contact support if needed.`,
        subject: `Reset your password `,
        email: user.email,
        text: "Click the button to reset your password."
    }
}

export default forgotPassword