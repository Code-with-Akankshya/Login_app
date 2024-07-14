import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../constants/colors'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Button from '../components/button'
import Checkbox from "expo-checkbox"

const Login = (navigation) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  constn[isChecked,setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontsize: 22,
              fontWeight: 'bold',
              marginVertical: 12,
              color: COLORS.black
            }}
          >
           Hey Welcome back !
          </Text>
          <Text
            style={{
              fontsize: 16,
              color: COLORS.black
            }}
          >
         Hello again you have been missed!  
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontsize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}
          >
            Email address
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22
            }}
          >
            <TextInput
              placeholder='Enter your email address'
              placeholderTextColor={COLORS.black}
              keyboardType='email-address'
              style={{
                width: '100%'
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontsize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}
          >
            Mobile Number
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 22
            }}
          >
            <TextInput
              placeholder='+91'
              placeholderTextColor={COLORS.black}
              keyboardType='numeric'
              style={{
                width: '12%',
                borderRightWidth: 1,
                borderLeftColor: COLORS.grey,
                height: '100%'
              }}
            />

            <TextInput
              placeholder='Enter your phone number'
              placeholderTextColor={COLORS.black}
              keyboardType='numeric'
              style={{
                width: '80%'
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontsize: 16,
              fontWeight: 400,
              marginVertical: 8
            }}
          >
            Password
          </Text>

          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22
            }}
          >
            <TextInput
              placeholder='Enter your password'
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={{
                width: '100%'
              }}
            />

            <TouchableOpacity
            onPress={()=> setIsPasswordShown(!isPasswordShown)}
              style={{
                position: 'absolute',
                right: 12
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name='eye-off' size={24} color={COLORS.black} />
              ) : (
                <Ionicons name='eye-off' size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          marginVertical: 6,
        }}>
          <Checkbox
          style={{
            marginRight: 8
          }}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? COLORS.primary : undefined}
          />

          <Text>Remember Me</Text>
        </View>

        <Button
        title="Login"
        filled
        style={{
          margintop: 18,
          marginBottom: 4,
        }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Login
