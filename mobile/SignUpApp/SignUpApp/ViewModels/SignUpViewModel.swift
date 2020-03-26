//
//  SignUpViewModel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/26.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpViewModel {
    var identification: String = "" { didSet { checkValidation() } }
    var password: String = "" { didSet { checkValidation() } }
    var passwordReconfirmation: String = "" { didSet { checkValidation() } }
    var name: String = "" { didSet { checkValidation() } }
    
    private func checkValidation() {
        
    }
}
