import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import COLORS from '../constants/colors'

const Welcome = naviagtion => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={{ COLORS,secondary, COLORS,primary }}
    >
      <view style={{ flex: 1 }}>
        <view>
          <Image
            url='https://cdn.vectorstock.com/i/1000v/98/61/cute-little-boy-cartoon-vector-21539861.jpg'
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: 'absolute',
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: '-15deg' }
              ]
            }}
          />
        </view>
      </view>

      <view
        style={{
          paddinghorizontal: 22,
          position: 'absolute',
          top: 400,
          width: '100%'
        }}
      >
        <Text
          style={{
            fontsize: 50,
            fontweight: 800,
            color: COLORS.white
          }}
        >
          Let's Get
        </Text>
        <Text
          style={{
            fontsize: 47,
            fontweight: 800,
            color: COLORS.white
          }}
        >
          Started
        </Text>

        <view style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontsize: 16,
              color: COLORS.white,
              marginVertical: 4
            }}
          >
            Connect with each other with chat
          </Text>
          <Text
            style={{
              fontsize: 16,
              color: COLORS.white
            }}
          >
            Calling, Enjoy Safe and private texting
          </Text>
        </view>
        <Button
          title='Join Now'
          onPress={() => NavigationPreloadManager.navigate('Signup')}
          style={{
            marginTop: 22,
            width: '100%'
          }}
        />

        <view
          style={{
            flexDirection: 'row',
            marginTop: 12,
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              fontsize: 16,
              color: COLORS.white
            }}
          >
            Already have an account ?
          </Text>
          <Pressable onPress={() => naviagtion.navigate('Login')}>
            <Text
              style={{
                fontsize: 16,
                color: COLORS.white,
                fontweight: 'bold',
                marginleft: 4
              }}
            >
              Login
            </Text>
          </Pressable>
        </view>
      </view>
    </LinearGradient>
  )
}

export default Welcome
