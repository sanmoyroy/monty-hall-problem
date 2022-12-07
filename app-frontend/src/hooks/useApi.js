const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

async function fetchData({
    path,
    method,
    data,
    headers,
    onError
}) {
    const response = await fetch(path, {
        method: method,
        body: data ? JSON.stringify(data) : null,
        headers: headers ? headers : defaultHeaders
    }).then((response) => {
        if (response.status > 399) {
            return onError(response);
        }
        return response.json();
    })

    return response;
};

function useApi(onError) {
    return {
        post: (path, data, headers) =>
            fetchData({
                path: path,
                method: 'POST',
                data: data,
                headers: headers,
                onError: onError
            })
    };
}

export default useApi;