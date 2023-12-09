from model.evaluator import Evaluator
from model.loader import Loader
from model.model import Model


evaluator = Evaluator()
loader = Loader()
model = Model()

# Parameters   
url = "winequality-white.csv"

# Charge data
dataset = loader.charge_data(url)

# Separating input and output data
X = dataset.iloc[:,0:-1]
Y = dataset.iloc[:,-1]


def test_model_rf():  
    # Importing the Random Forest model
    rf_path = 'model.pkl'
    model_rf = Model.load_model(rf_path)
    
    # Obtaining Random Forest metric
    accuracy_rf = evaluator.evaluate(model_rf, X, Y)
    
    # Testing Random Forest metric
    assert accuracy_rf >= 0.35
