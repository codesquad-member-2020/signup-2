//
//  signUpStackView.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/25.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpStackView: UIStackView, SignUpValidationChangedUpdatable {
    
    func updateAlertLabel(isValid: Bool) {
        updateLabel(isValid: isValid)
    }

    var alertLabel: SignUpAlertLabel?
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    func configure() {
        guard let alertLabel = alertLabel else { return }
        addArrangedSubview(alertLabel)
    }
    
    func updateLabel(isValid: Bool) {
        alertLabel?.upateAlert(isValid: isValid)
    }
}
