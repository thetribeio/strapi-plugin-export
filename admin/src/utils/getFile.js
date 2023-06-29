const getNameFile = (contentType) => {
    const currentDate = new Date();

    return `${contentType}-${currentDate.toISOString().replace('T', '_')[0]}.csv`;
};

module.exports = (contentType, axiosResponse) => {
    const blob = new Blob([axiosResponse.data], { type: 'text/csv' });
    const fileUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', getNameFile(contentType));
    link.click();
};
