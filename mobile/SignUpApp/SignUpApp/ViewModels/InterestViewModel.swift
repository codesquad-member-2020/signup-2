//
//  InterestViewModel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/28.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class InterestViewModel {
    
    var didFinishChangingInterests: (() -> ())?
    
    var interests: [String] = [] {
        didSet {
            didFinishChangingInterests?()
        }
    }
    
    func addInterest(_ interest: String) {
        interests.append(interest)
    }
    
    func deleteInterest(at index: Int) {
        interests.remove(at: index)
    }
}
