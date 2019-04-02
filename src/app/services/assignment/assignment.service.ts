import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AssignmentService {
  private serverUrl = "https://httpbin.org/get";

  getData() {
    let headers = this.createRequestHeader();
    return this.http.get(this.serverUrl, { headers: headers });
  }

  constructor(private http: HttpClient) {}

  private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
      AuthKey: "my-key",
      AuthToken: "my-token",
      "Content-Type": "application/json"
    });

    return headers;
  }
}
