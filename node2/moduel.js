//module.js: 생성할 모듈 파일. 모듈을 생성할 때 exports 사용
//절대값을 구하는 메서드
exports.abs = function(number) {
    if(0<number) {
        return number;
    } else {
        return -number;
    }
};

//원의 넓이를 구하는 메서드
exports.circleArea = function(radius) {
    return radius * radius * Math.PI;
};