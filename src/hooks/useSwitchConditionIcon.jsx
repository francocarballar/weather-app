function useSwitchConditionIcon (conditionText, setIcon) {
  switch (conditionText) {
    case 'Clear':
      setIcon('/media/Clear.png')
      break
    case 'Sunny':
      setIcon('/media/Clear.png')
      break
    case 'Light rain':
      setIcon('/media/LightRain.png')
      break
    case 'Light drizzle':
      setIcon('/media/LightRain.png')
      break
    case 'Partly cloudy':
      setIcon('/media/LightCloud.png')
      break
    case 'Overcast':
      setIcon('/media/HeavyCloud.png')
      break
    case 'Heavy snow':
      setIcon('/media/Snow.png')
      break
    case 'Cloudy':
      setIcon('/media/HeavyCloud.png')
      break
    case 'Moderate rain':
      setIcon('/media/LightRain.png')
      break
    case 'Light rain shower':
      setIcon('/media/LightRain.png')
      break
    case 'Mist':
      setIcon('/media/Mist.png')
      break
    case 'Patchy rain possible':
      setIcon('/media/LightRain.png')
      break
    case 'Moderate or heavy rain with thunder':
      setIcon('/media/Thunderstorm.png')
      break
    default:
      setIcon('/media/Clear.png')
      break
  }
}

export { useSwitchConditionIcon }
