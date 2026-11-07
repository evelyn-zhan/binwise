import api from "."

async function predict(img: File): 
    Promise<{isError: boolean, message: string}> {
    let isError: boolean = false
    let message: string = ''

    try {
        const formData = new FormData()
        formData.append('image', img)
        const response = await api.post('/predict', formData)
        message = response.data.result
    } catch (error: any) {
        isError = true
        message = error.response.data.message
    }

    return { isError, message }
}

export { predict }