const http = require('http');
const querystring = require('querystring');
const port = 3000;

let movieList = [{title: '스타워즈 4', director: '조지 루카스'}];

const server = http.createServer(function(req, res) {
  if(req.method.toLowerCase() == 'post') {
    //post 방식이면
    addNewMovie();
  } else {
    //get이면 목록 출력
    showList();
  }
});

server.listen(port, () => {
  //서버 연결
  console.log(`server on: ${port} port`);
});

function showList(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

  res.write('</ul></div>');
  res.write('<html>');
  res.write('<meta charset="UTF-8"/>');
  res.write('<body>');

  res.write('<h3>Favorite Movie</h3>');
  res.write('<div><ul>');

  movieList.forEach(function(item) {
    res.write('<li>' + item.title + '(' + item.director + ')</li>');
  }, this);
  res.write('</ul></div>');

  res.write(
    '<form method="post" action="."><h4>새 영화 입력</h4>' +
    '<div><input type="text" name="title" placeholder="영화 제목"></div>' +
    '<div><input type="text" name="director" placeholder="감독"></div>' +
    '<input type="submit" value="upload">' +
    '</form>'
  );

  res.write('</body>');
  res.write('</html>');
  res.end();
}

function addNewMovie(req, res) {
  let body = '';
  req.on('data', function() {
    body += chunk;
  });
  req.on('end', function() {
    let data = querystring.parse(body);
    let title = data.title;
    let director = data.director;

    movieList.push({title: title, director: director});

    //res.end('Success');
    res.statusCode = 302;
    res.setHeader('Location', '.');
    res.end();
  });
}