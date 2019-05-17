//
//  Counter.swift
//  CounterApp
//
//  Created by Jessie Bogart on 5/13/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
@objc(Counter)
class Counter: RCTEventEmitter {
  

  private var count = 0
  
  @objc
  func increment() {
    count += 1
    print("count is \(count)")
    sendEvent(withName: "onIncrement", body: ["count": count])
  }
  
  @objc
  func decrement(){
    count -= 1
    print("count is \(count)")
    sendEvent(withName: "onDecrement", body: ["count": count])
  }
  
  override func supportedEvents() -> [String]! {
    return ["onIncrement", "onDecrement"]
  }
  

  override func constantsToExport() -> [AnyHashable : Any]! {
    return ["initialCount": count]
  }
  

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
}
