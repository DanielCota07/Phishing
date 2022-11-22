'use strict';

async function main(text) {
  return new Promise(res => {
    // [START aiplatform_predict_text_classification_sample]
    /**
     * TODO(developer): Uncomment these variables before running the sample.\
     * (Not necessary if passing values as arguments)
     */

    // const text = 'YOUR_PREDICTION_TEXT';
    const endpointId = '7189086409469198336';
    const project = '339726620004';
    const location = 'us-central1';
    const aiplatform = require('@google-cloud/aiplatform');
    const {instance, prediction} =
      aiplatform.protos.google.cloud.aiplatform.v1.schema.predict;

    // Imports the Google Cloud Model Service Client library
    const {PredictionServiceClient} = aiplatform.v1;

    // Specifies the location of the api endpoint
    const clientOptions = {
      apiEndpoint: 'us-central1-aiplatform.googleapis.com',
    };

    // Instantiates a client
    const predictionServiceClient = new PredictionServiceClient(clientOptions);

    async function predictTextClassification() {
      // Configure the resources
      const endpoint = `projects/${project}/locations/${location}/endpoints/${endpointId}`;

      const predictionInstance =
        new instance.TextClassificationPredictionInstance({
          content: text,
        });
      const instanceValue = predictionInstance.toValue();

      const instances = [instanceValue];
      const request = {
        endpoint,
        instances,
      };

      const [response] = await predictionServiceClient.predict(request);
      console.log('Predict text classification response');
      console.log(`\tDeployed model id : ${response.deployedModelId}\n\n`);

      console.log('Prediction results:');

      for (const predictionResultValue of response.predictions) {
        const predictionResult =
          prediction.ClassificationPredictionResult.fromValue(
            predictionResultValue
          );

        for (const [i, label] of predictionResult.displayNames.entries()) {
          console.log(`\tDisplay name: ${label}`);
          console.log(`\tConfidences: ${predictionResult.confidences[i]}`);
          console.log(`\tIDs: ${predictionResult.ids[i]}\n\n`);
        }
      }

      return response
    }
    res(predictTextClassification());
    // [END aiplatform_predict_text_classification_sample]
  })
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});

module.exports = { main }