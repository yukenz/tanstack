const HOST = 'http://localhost:9443'
const DYNA_HOST = '10.0.118.39:5555'

export interface JwtResponse {
    expiresIn?: number,
    tokenType?: string,
    accessToken?: string,
    Exception?: string
}

export async function getJwtToken(
    apiKey: string,
    appId?: string,
): Promise<JwtResponse> {

    const JWT_URL = HOST + '/gateway/getJsonWebToken/1.0/getJsonWebToken'
    const getJwtRequest = fetch(JWT_URL, {
        method: 'POST',
        headers: {
            ['Accept']: 'application/json',
            ['Content-Type']: 'application/json',
            ['X-Dynamic-Host']: DYNA_HOST,
            ['x-Gateway-APIKey']: apiKey
        },
        body: JSON.stringify({
                claimsSet: {
                    appId: appId
                }
            }
        )
    });

    const response = await getJwtRequest
        .then(value => value.json() as unknown as JwtResponse)
        .catch(reason => ({Exception: reason}));

    return response;
}