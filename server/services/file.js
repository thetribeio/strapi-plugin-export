const fs = require('fs');
const os = require('os');
const path = require('path');

const defaultName = () => {
    const currentDate = new Date();

    return `${currentDate.toISOString().split('T')[0]}.csv`;
};

module.exports = () => ({
    writeFile(data) {
        const fileName = defaultName();
        const filePath = path.join(os.tmpdir(), fileName);
        fs.writeFileSync(filePath, data);

        return fs.createReadStream(filePath);
    },
});
