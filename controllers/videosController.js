const Videos = require("../models/Videos.js");
// const axios = require("axios");

exports.getVideos = async (req, res) => {
    try {
        const videos = await Videos.find();
        res.json(videos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

exports.getVideosById = async (req, res) => {
    try {
        const videos = await Videos.findById(req.params.id);
        res.json(videos);
    } catch (error) {
        res.status(404).json({message: error.message});
    }

}

exports.saveVideos = async (req, res) => {

    // let getVideoDetails = await axios({
    //     method: 'GET',
    //     responseType: 'JSON',
    //     url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=xPGRTWmlQPE&key=AIzaSyBkC8tex6VBrmaOBxc9LQAapOZT6hCDju8`
    // }).catch(err => { status: 404});
    // let data = getVideoDetails.data;
    // let items = data.items[0];
    // const videos = new Videos({
    //     youtubeVideoId: items.id,
    //     snippet: items.snippet,
    //     status: 1,
    // });
    // try {
    //     const savedVideos = await videos.save();
    //     res.status(201).json(savedVideos);
    // } catch (error) {
    //     res.status(400).json({message: error.message});
    // }

    const videos = new Videos(req.body);
    try {
        const savedVideos = await videos.save();
        res.status(201).json(savedVideos);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.updateVideos = async (req, res) => {
    const cekId = await Videos.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const updatedVideos = await Videos.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedVideos);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.deleteVideos = async (req, res) => {
    const cekId = await Videos.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedVideos = await Videos.deleteOne({_id: req.params.id});
        res.status(200).json(deletedVideos);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}