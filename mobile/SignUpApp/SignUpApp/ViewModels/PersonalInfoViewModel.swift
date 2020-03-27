//
//  PersonalInfoViewModel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PersonalInfoViewModel {
    
    var birthDate: Date? {
        didSet {
            
        }
    }
    
    var gender: String = "female" {
        didSet {
            
        }
    }
    
    var email: String = "" {
        didSet {
            
        }
    }
    
    var phone: String = "" {
        didSet {
            
        }
    }
    
    var isBirthDateValid: Bool = false { didSet { } }
    var isEmailDateValid: Bool = false { didSet { } }
    var isPhoneDateValid: Bool = false { didSet { } }
    
    var isValid: Bool = false {
        didSet {
            
        }
    }
    
    private func checkValidation() {
        isValid = isBirthDateValid && isEmailDateValid && isPhoneDateValid
    }
}
