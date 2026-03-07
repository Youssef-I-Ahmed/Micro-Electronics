// JWT => JSON Web Token
// JWT is a compact, URL-safe means of representing claims to be transferred between two parties. 
// The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure,
//  enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

// JWT is commonly used for authentication and authorization purposes. 
// It allows the server to generate a token that contains user information and send it to the client.
//  The client can then include this token in subsequent requests to access protected resources on the server.

// statless authentication => The server does not need to store any session information about the user.
// digital signature => JWTs are signed using a secret or a public/private key pair, ensuring the integrity and authenticity of the token.
// if signature is valid => the server can trust the information contained in the token without needing to query a database or maintain session state.
// can be broken down into three parts: header, payload, and signature. 
// The header typically contains information about the type of token and the signing algorithm used. 
// The payload contains the claims, which are statements about an entity (typically, the user) and additional data. 
// The signature is created by taking the encoded header and payload, signing it with a secret or private key, and then encoding it to produce the final token.
// signed => the server can verify that the token has not been tampered with and that it was issued by a trusted source.
// JWTs can also be encrypted to provide confidentiality, ensuring that the token's contents are not visible to unauthorized parties.
// JWTs are widely used in modern web applications for secure authentication and authorization, especially in scenarios where stateless communication is desired.
// JWTs are often used in combination with other authentication mechanisms, such as OAuth, to provide a complete authentication and authorization solution for web applications.
// JWTs are typically used in scenarios where stateless authentication is desired, such as in RESTful APIs, single-page applications (SPAs), and mobile applications.
// JWTs can be stored in various ways on the client side, such as in local storage, session storage, or cookies.
/**************************************/
// in postman => Authorization => Bearer Token => paste the token generated from login
// in postman => Headers => Authorization => Bearer Token => paste the token generated from login
// request.headers['authorization']

/**************************************/