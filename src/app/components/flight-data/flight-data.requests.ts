  
import { HttpClient } from '@angular/common/http';
import { FlighsModel } from 'src/app/models/flighs-model';
import { AirtimeModel } from 'src/app/models/air-time-model';
import { environment } from '../../../environments/environment';

export const GetAllFlights = (http : HttpClient) => {
    http.get(`${ environment.API_HOST }/api/Flights/months`).subscribe((result: FlighsModel[]) => {  
        return result;
    });
}

export const GetTop10DestinationsForOrigin = (http: HttpClient, origin: string) => {
    http.get(`${ environment.API_HOST }/api/Flights/destinations?origin=${origin}`).subscribe((result: FlighsModel[]) => {  
        return result;
    });
}

export const GetMeanAirtimeForOrigin = (http: HttpClient,origin: string): Promise<AirtimeModel> => {
    return new Promise(resolve => {
        http.get(`${ environment.API_HOST }/api/Flights/airtime/mean?origin=${origin}`).subscribe((result: AirtimeModel) => {
            resolve(result);
        });
    });  
}