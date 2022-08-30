import { HandlerTools } from "@iote/cqrs";
import { FunctionHandler } from "@ngfi/functions";
import { HttpsContext } from "libs/util/ngfi/functions/src/lib/context/https-context.interface";
import { __ConvertWhatsAppApiPayload } from "../utils/convert-whatsapp-payload.util";
import { __VerifyWhatsAppTokenWebHook } from "../utils/initial-whatsapp-verifier.util";

export class MessageHookHandler extends FunctionHandler<{val:any}, any>
{
  public async execute(data:any, context:HttpsContext, tools:HandlerTools)
  {  
    if(!data){
      tools.Logger.log(()=>`⚠⚠⚠[MessageHookHandler] webhook is being validated first.`)
      const token = "qasw23edfrtghy657ujkiklop09" //To move to environment variable, Token is user defined
      return __VerifyWhatsAppTokenWebHook(context, tools, token);
    }
     tools.Logger.log(() =>`Processing data from webhook...⌚⌚`);
     
     const dataT = __ConvertWhatsAppApiPayload(data);
     tools.Logger.log(() =>`${dataT.entry}`);
     tools.Logger.log(() =>`${dataT.object}`);

  

    
  }
  
}