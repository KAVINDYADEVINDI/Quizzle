import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Quiz = ({ navigation }) => {
  const [Question, setQuestion] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const getQuiz = async () => {
    const url = "https://opentdb.com/api.php?amount=10";
    const data = await fetch(url)
      .then((res) => res.json())
      .then((json) => setQuestion(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getQuiz();
  }, []);
  console.log(Question[0]);

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={{ width: "100%", height: "100%" }}>
          <LinearGradient
            colors={["rgba(101, 48, 186,1)", "rgba(160, 57, 219,1)"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
          >
            <View style={styles.container}>
              <View style={styles.bannerContainer}>
                <Image
                  source={require("../assets/images/wel.png")}
                  style={styles.banner}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.top}>
                <Text style={styles.topText}>Question 1/5</Text>
              </View>

              <View style={styles.question}>
                <Text style={styles.questionText}>{Question[0].question}</Text>
              </View>
              <View style={styles.options}>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.optionText}>
                    {Question[0].incorrect_answers[0]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.optionText}>
                    {Question[0].incorrect_answers[1]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.optionText}>
                    {Question[0].incorrect_answers[2]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.optionText}>
                    {Question[0].correct_answer}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.bottom}>
                {/* <TouchableOpacity style={styles.button}>
              <LinearGradient
                colors={["rgba(30,201,76,1)", "rgba(20,99,41,1)"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>SKIP</Text>
              </LinearGradient>
            </TouchableOpacity> */}
                <TouchableOpacity style={styles.button}>
                  <LinearGradient
                    colors={["rgba(30,201,76,1)", "rgba(20,99,41,1)"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>NEXT</Text>
                  </LinearGradient>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate("Result")}>
              <Text>END</Text>
            </TouchableOpacity> */}
              </View>
            </View>
          </LinearGradient>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 12,
    width: "100%",
    height: "100%",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  top: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  topText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  question: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 18,
  },
  options: {
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  option: {
    paddingVertical: 12,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#af46eb",
  },
  optionText: {
    fontSize: 16,
  },
  bottom: {
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 10,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  parent: {
    height: "100%",
  },
});
