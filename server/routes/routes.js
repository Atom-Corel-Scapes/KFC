import {menu} from '../Data/mockData.js';

export const getMenuList = (req, res) => {
    res.send(menu);
}

export const getMenuByIdentifier = (req, res) => {
    const { identifier } = req.params;
    const filteredData = menu.filter((item) => item.identifier === identifier)
    if(filteredData.length)
        res.send(filteredData);
    else res.send('Item not found,');
}

export const getMenuByLimit = (req, res) => {
    const {limit} = req.query;
    const limitedData = menu.slice(0, limit)
    if(req.query.limit <= 5){
        res.send(limitedData);
    }
    else res.send("enter less than 5");
}