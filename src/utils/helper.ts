import { accessToken, apiUrl } from './constants'

export const getUrl = (endPoint: string) => {
	return apiUrl + endPoint
}

export const decodeApiResponse = (result: APIResponse) => {
	if (!result.response) {
		return {
			response: {},
			status: result.status,
		}
	}

	return {
		response: JSON.parse(result.response),
		status: result.status,
	}
}

export const fetchWithAuth = (endPoint: string): any => {
    const apiResponse = httpGet(getUrl(endPoint), {
		Authorization: 'Basic ' + accessToken
	})
	
	const decodedApiResponse = decodeApiResponse(apiResponse)
	const { response = {} } = decodedApiResponse

	if (response.type === "error") {
		throw response.error.message
	}
    
	return response.values || null
}

export function UpdateWithAuth<P, R>(endPoint: string, payload?: P): R {

	const stringifiedData: string | null = payload ? JSON.stringify(payload) : null
	const headers: any = {
		Authorization: 'Basic ' + accessToken
	}

	if (stringifiedData) {
		headers["content-type"] = "application/json"
	}

	const apiResponse = httpPost(getUrl(endPoint), stringifiedData, headers)
	
	const decodedApiResponse = decodeApiResponse(apiResponse)
	const { response = {} } = decodedApiResponse

	if (response.type === "error") {
		notify(response.error.message, "error", 3000)
		throw response.error.message
	}

	return response.values
}
