const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp = document.getElementById('temp_real_val')


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === '') {
        city_name.innerHTML = "Please enter city name";
    } else {
        try {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6f06dbdf184a95d9116b59e2db7c0587`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            console.log(tempMood);

            //condition to check clouds
            if(tempMood == "Clear"){
            temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68 "></i>';
            }else if(tempMood == "Clouds"){
            temp_status.innerHTML ='<i class="fas fa-cloud" style="color: #f1f2f6"></i>';
            }else if(tempMood == "Rain"){
            temp_status.innerHTML ='<i class="fas fa-cloud-rain" style="color: #a4b0be"></i>';
            }else{
            temp_status.innerHTML ='<i class="fas fa-sun" style="color: #eccc68"></i>';
            }
          
        } catch {
            city_name.innerHTML = "Please enter VALID city name"
        }
    }
}

submitBtn.addEventListener('click', getInfo)