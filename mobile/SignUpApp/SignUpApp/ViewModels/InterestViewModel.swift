//
//  InterestViewModel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/28.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class InterestViewModel {
    
    var didFinishAddingInterest: (() -> ())?
    
    var interests: [String] = [] {
        didSet {
            didFinishAddingInterest?()
        }
    }
    
    func addInterest(_ interest: String) {
        interests.append(interest)
    }
}
