using Microsoft.AspNetCore.Mvc;

namespace templateApiReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        // [HttpGet]
        // public IEnumerable<WeatherForecast> Get()
        // {
        //     return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //     {
        //         Date = DateTime.Now.AddDays(index),
        //         TemperatureC = Random.Shared.Next(-20, 55),
        //         Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        //     })
        //     .ToArray();
        // }

        [HttpGet]
        public TestingPropertyLanguage Get()
        {

            var testingprop = new TestingPropertyLanguage{

                Index= 1,
                Name="TestingGet"
            };

            return testingprop;
        }

        [HttpGet("GetAll")]
        public IEnumerable<TestingPropertyLanguage>GetAll(){

            var testingprop = new List<TestingPropertyLanguage>{

                new TestingPropertyLanguage{
                     Index= 1,
                    Name="TestingGet"
                },
                new TestingPropertyLanguage{
                    Index=2,
                    Name="Travis"
                },
                new TestingPropertyLanguage{
                    Index=3,
                    Name="Marry"
                },
                 new TestingPropertyLanguage{
                    Index=4,
                    Name="Jaden"
                },
                new TestingPropertyLanguage{
                    Index=5,
                    Name="Test"
                },
            };

            return testingprop;
        }

         [HttpDelete("{id}")]
         public async Task< bool >Delete([FromRoute] int id)
         {

             
            //todo database query

            return true;
         }


         [HttpPost("AddTestingComponent")]
         public bool Add (TestingPropertyLanguage testingPropertyLanguage){

            return true;
         }
    }
}

//https://localhost:7263/WeatherForecast