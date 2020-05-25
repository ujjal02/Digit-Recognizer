let firstTime = 0
let chart = ''

const loadChart = (label, data) => {
    const context = document.querySelector('#chartBox').getContext('2d')
    chart = new Chart(context, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'Prediction',
                backgroundColor: '#f50057',
                borderColor: 'rgb(255, 99, 132)',
                data
            }]
        },
        options: {}
    })
}

const displayChart = (data) => {
    const label = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    if(firstTime === 0){
        loadChart(label, data)
        firstTime = 1
    }else{
        chart.destroy()
        loadChart(label, data)
    }
    document.querySelector('#chartBox').style.display = 'block'
}