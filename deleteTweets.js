var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'XXX',
  consumer_secret: 'XXX',
  access_token_key: 'XXX',
  access_token_secret: 'XXX'
});
var moment = require('moment-timezone')

module.exports = {
  delete24: function(){
    var arr = [];
    var size = Number;
    var index = 0;
    client.get('statuses/user_timeline',{count: 200, include_rts: false}, function(error, tweets, response){
      console.log('going')
      if(!error){
        size = tweets.length;
        tweets.forEach(function(tweet){
          index += 1;

          arr.push({
            tweetid: tweet.id_str,
            created_at: Date.parse(tweet.created_at),
            tweet: tweet.text,
          })
          console.log(size);
          console.log(index)
        })
        if(index == size){
          console.log('done')
          console.log(arr)
          arr.forEach(function(tweet){
            if((Date.now() - 86400000) > tweet.created_at){
              var tweetId = tweet.tweetid;
              console.log('need to delete')
              client.post('statuses/destroy/' + tweetId, function(error, tweet, response){
                if(!error){
                  console.log('ok')
                }
              })
            }

          })

        }
      }

    })

  }

}
