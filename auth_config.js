const config = {
    issuer: "https://login.textron.com", 
    client_id: "59a23a2a-2a17-468a-b0f9-00e3bad8def5",
    client_secret: "DiYZgXRcbvcj0KtEdw3ljo2ru6OyJhr0XLM93XcTOjfxVu0RUnbtpltK3Wi6Oq9T", 
    // claims: ["BU", "EmployeeID", "FirstName", "LastName", "emailAddress", "role"], 
    redirect_uri:"http://localhost:8080/portal", 
    jwks_uri:"https://login.textron.com/ext/oauth/jwks_ken_dev"
}

export default config
    