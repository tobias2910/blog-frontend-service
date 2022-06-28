import { NextApiRequest, NextApiResponse } from 'next';
import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY,
});

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const mailOptions = {
      Messages: [
        {
          From: {
            Email: process.env.REQUEST_RECEIVER_MAIL,
            Name: `${req.body.firstName} ${req.body.lastName}`,
          },
          To: [
            {
              Email: process.env.REQUEST_RECEIVER_MAIL,
              Name: 'Tobias Caliskan',
            },
          ],
          Subject: `New request from ${req.body.email}!`,
          TextPart: req.body.description,
        },
      ],
    };

    try {
      await mailjet.post('send', { version: 'v3.1' }).request(mailOptions);
      res.status(200).json({ sendSuccessful: true });
    } catch (error) {
      res.status(400).json({ sendSuccessful: false });
    }
  } else {
    res.status(405).json({ error: 'Method not supported' });
  }
};

export default sendMail;
