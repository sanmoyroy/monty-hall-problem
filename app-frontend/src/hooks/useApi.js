const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

async function fetchData({
    path,
    method,
    data,
    headers
}) {
    const response = await fetch(path, {
        method: method,
        body: data ? JSON.stringify(data) : null,
        headers: headers ? headers : defaultHeaders
    }).then((response) => {
        return response.json();
    });

    return response;
};

function useApi() {
    return {
        post: (path, data, headers) =>
            fetchData({
                path: path,
                method: 'POST',
                data: data,
                headers: headers
            })
    };
}

export default useApi;