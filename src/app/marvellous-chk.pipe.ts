import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number , param : string): string {
     let resultString:string="";

    switch (param) {
      case "Even":
        if(value%2==0){
          resultString="Number is Even"
        }else{
          resultString="Number is Not Even"
        }
        
        break;
        case "Odd":
          if(value%2!=0){
            resultString="Number is odd"
          }else{
            resultString="Number is Not odd"
          }
        break;
        case "Prime":
          let cnt=2;
        while(cnt<value){
          if(value%cnt!=0)
          cnt++;
        else{
          
          break;
        }
        }
        if(cnt==value){
          resultString="Number is prime";
        }else{
          resultString="Number is not prime";
        }
        break;
        case "Perfect":
          let iCnt=1;
          let sum=0;
          while(iCnt<value){
            if(value%iCnt==0)
              sum=sum+iCnt;
            
            iCnt++;
          }
          if(sum==value){
            resultString="Number is perfect";
          }else{
            resultString="Number is not perfect";
          }
        break;
      default:
        resultString="invalid input to pipe";
        break;
    }
    return resultString;
  }

}
