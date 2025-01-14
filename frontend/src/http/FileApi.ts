import $host from ".";

export const getAllFiles = async () => {
    const { data } = await $host.get('/files');
    return data;
}

export const uploadFile = async (file: File) => {
    const formData = new FormData();

    formData.append('file', file);

    const { data } = await $host.post('/files', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return data;
}

export const deleteFile = async (id: number) => {
    const { data } = await $host.delete(`/files/${id}`);
    return data;
}
