//
//  Counter.m
//  CounterApp
//
//  Created by Jessie Bogart on 5/13/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(Counter, RCTEventEmitter)

  RCT_EXTERN_METHOD(increment)
  RCT_EXTERN_METHOD(decrement)

@end
