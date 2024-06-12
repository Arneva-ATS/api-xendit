import { Request, Response } from "express";
import { Xendit, Balance as BalanceClient } from 'xendit-node';
import { SECRET_API_KEY } from '../secret';

// const xenditClient = new Xendit({
//   secretKey: SECRET_API_KEY,
// })

// const { Balance } = xenditClient

// const xenditBalanceClient = new BalanceClient({secretKey: SECRET_API_KEY})

// const BalanceWallet = await xenditBalanceClient.getBalance()


export const xenditCallback = (req: Request,res: Response)=>{
    // res.send('Xendit Successfull', JSON(req));
    
    const response = {
      code: 200,
      success: true,
      message: 'Success Xendit',
      // data: req.body
      };
    console.log(response);
    console.log(req.body);
    res.status(200).json(response)
}