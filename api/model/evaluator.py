from sklearn.metrics import accuracy_score


class Evaluator:

    def evaluate(self, model, X_test, Y_test):
        """ Makes a prediction and evaluates the model."""
        predictions = model.predict(X_test)

        return (accuracy_score(Y_test, predictions))
