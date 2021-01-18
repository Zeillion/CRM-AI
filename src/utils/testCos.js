import COS from "./cos-js-sdk-v5.min.js";

const cos = new COS({
    SecretId: "AKIDiBMM4UqWz96lF4OsrZzBbjCNL1UgGGck",
    SecretKey: "zt8QQ9gw1ye4E7lCqIdiaATYS5WnnWyC",
})

let getDate = `${new Date().getFullYear()}-${new Date().getMonth() +
    1}-${new Date().getDate()}`;

export const upDateFile = (file, fileName) => {
    cos.putObject({
        Bucket: "crm-ai-prd-1259627966",
        Region: "ap-chengdu",
        Key: getDate + "/" + fileName,
        Body: file,
    }, function (err, data) {
        if (err) {
            console.log(err)
        }
        if (data) {
            console.log(data)
        }
    })
}
