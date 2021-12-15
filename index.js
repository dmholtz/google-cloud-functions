handle_json = function (json) {
    let sum = 0;
    for (val of json) {
        sum += val;
    }
    json["sum"] = sum;
    return json;
}

exports.calc = function (req, res) {
    let content_type = req.get('content-type');

    switch (content_type) {
        case 'application/json':
            let req_json = req.body;
            let res_json = handle_json(req_json);
            res.status(200).send(res_json);
            break;
        default:
            res.status(300).send("Cannot handle request");
            break;
    }

};