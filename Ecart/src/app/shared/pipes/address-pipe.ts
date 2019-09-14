import { Pipe , PipeTransform } from "@angular/core";



@Pipe({name:"address"})
export class AddressPipe implements PipeTransform{
    transform(value: any) {
        if(!value){
            return [];
        }
        let addressArr:string[]=[];
        addressArr.push(value.addressLine1);
        addressArr.push(value.addressLine2);
        addressArr.push(value.city);
        addressArr.push(value.state+" - "+value.pin);
                
        return addressArr;
    }

}