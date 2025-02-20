import {OAuth2Client} from 'google-auth-library'

const {GOOGLE_CLIENT_ID} = process.env

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

const googleAuthCheck = async (tokenId) => {
    const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: GOOGLE_CLIENT_ID, 
      });
      const payload = ticket.getPayload();
      return payload
}

export default googleAuthCheck